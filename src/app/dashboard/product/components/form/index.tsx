"use client";

import { UploadCloud } from "lucide-react";
import styles from "./styles.module.scss";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { Button } from "@/app/dashboard/components/button";
import { api } from "@/services/api";
import { getCookieClient } from "@/lib/cookieClient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CategoryProps {
  id: string;
  name: string;
}

interface Props {
  categories: CategoryProps[];
}

export function Form({ categories }: Props) {
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState("");
  const router = useRouter();

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type !== "image/png" && image.type !== "image/jpeg") {
        toast.warning("Formato de imagem inválido. Use PNG ou JPEG.");
        return;
      }
      setImage(image);
      setPreviewImage(URL.createObjectURL(image));
    }
  }

  async function handleRegisterProduct(formData: FormData) {
    const categoryIndex = formData.get("category");
    const price = formData.get("price");
    const name = formData.get("name");
    const description = formData.get("description");

    if (!categoryIndex || !name || !description || !price || !image) {
      toast.warning("Todos os campos são obrigatórios.");
      return;
    }

    const data = new FormData();
    data.append("name", name);
    data.append("price", price);
    data.append("description", description);
    data.append("category_id", categories[Number(categoryIndex)].id);
    data.append("file", image);

    const token = await getCookieClient();

    try {
      await api.post("/product", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Produto registrado com sucesso!");
      router.push("/dashboard");
    } catch (error) {
      toast.warning("Ocorreu um erro ao registrar o produto.");
      console.error(error);
    }
  }
  return (
    <main className={styles.container}>
      <h1>Novo Produto</h1>
      <form className={styles.form} action={handleRegisterProduct}>
        <label className={styles.labelImage}>
          <span>
            <UploadCloud size={30} color="#fff" />
          </span>
          <input
            type="file"
            accept="image/png, image/jpeg"
            required
            onChange={handleFile}
          />
          {previewImage && (
            <Image
              src={previewImage}
              alt={"imagem de preview"}
              className={styles.preview}
              fill
              quality={100}
              priority
            />
          )}
        </label>
        <select name="category">
          {categories.map((category, index) => (
            <option key={category.id} value={index}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="name"
          placeholder="Digite o nome do produto"
          required
          className={styles.input}
        />

        <input
          type="text"
          name="price"
          placeholder="Preço do produto"
          required
          className={styles.input}
        />
        <textarea
          name="description"
          placeholder="Digite a descrição do produto"
          required
          className={styles.input}
        ></textarea>
        <Button name={"Cadastrar produto"} />
      </form>
    </main>
  );
}
