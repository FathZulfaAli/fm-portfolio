import { ClientEmailData } from "@/src/types/collabForm.types";
import { mongoClient } from "./mongodb.config";
import { InsertOneResult } from "mongodb";
import { NextResponse } from "next/server";
import { validateClientData } from "@/src/helpers/validator.mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { clientEmail, clientName, description }: ClientEmailData = body;

    const validated = await validateClientData(
      clientName,
      clientEmail,
      description,
    );

    if (validated.status !== 200) {
      return NextResponse.json(
        {
          message: validated.error,
          error: validated.message,
        },
        { status: 500 },
      );
    }

    await mongoClient.connect();
    const database = mongoClient.db("Collab-form-data");
    const collection = database.collection("clients");

    const newClient = {
      name: clientName,
      email: clientEmail,
      description: description,
      createdAt: new Date(),
    };

    const result: InsertOneResult = await collection.insertOne(newClient);

    if (result.acknowledged) {
      return NextResponse.json(
        {
          stored: result.acknowledged,
          message: "Client saved successfully!",
        },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        {
          stored: result.acknowledged,
          error: "An error occurred while saving the client.",
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred.",
      },
      { status: 500 },
    );
  } finally {
    await mongoClient.close();
  }
}
