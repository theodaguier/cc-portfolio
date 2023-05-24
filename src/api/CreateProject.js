import { PrismaClient } from "@prisma/client";
import { Project } from "./project.model";

const prisma = new PrismaClient();

const project = await prisma.project.create({
  data: {
    // Ajouter les propriétés du projet ici
    title: "Mon projet",
    description: "Description de mon projet",
    // ...
  },
});
