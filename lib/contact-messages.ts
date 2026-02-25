import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTACT_MESSAGES_PATH = path.join(DATA_DIR, "contact-messages.json");

export type StoredContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

async function ensureStorage() {
  await mkdir(DATA_DIR, { recursive: true });
}

async function readMessages(): Promise<StoredContactMessage[]> {
  await ensureStorage();

  try {
    const contents = await readFile(CONTACT_MESSAGES_PATH, "utf-8");
    const parsed = JSON.parse(contents) as unknown;
    return Array.isArray(parsed) ? (parsed as StoredContactMessage[]) : [];
  } catch {
    return [];
  }
}

async function writeMessages(messages: StoredContactMessage[]) {
  await ensureStorage();
  await writeFile(CONTACT_MESSAGES_PATH, JSON.stringify(messages, null, 2), "utf-8");
}

export async function saveContactMessage(input: {
  name: string;
  email: string;
  message: string;
}): Promise<StoredContactMessage> {
  const messages = await readMessages();

  const newMessage: StoredContactMessage = {
    id: randomUUID(),
    name: input.name,
    email: input.email,
    message: input.message,
    createdAt: new Date().toISOString(),
  };

  messages.unshift(newMessage);
  await writeMessages(messages);

  return newMessage;
}
