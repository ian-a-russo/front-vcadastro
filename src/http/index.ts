import ICadastro from "@/interfaces/ICadastro";
import ICadastroEditado from "@/interfaces/ICadastroEditado";
const url = "https://vcadastro.vercel.app/";

export async function getUsers(): Promise<ICadastro[]> {
  try {
    const response = await fetch(`${url}/users`);
    if (!response.ok) {
      throw new Error("Erro ao carregar usuários");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    return [];
  }
}
export async function getUser(id: number): Promise<ICadastro[]> {
  try {
    const response = await fetch(`${url}/users/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao carregar usuários");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    return [];
  }
}

export async function editUser(
  nomeAlterado: string,
  emailAlterado: string,
  telefoneAlterado: string,
  id: number
) {
  try {
    const alteracoes: ICadastroEditado = {
      nome: nomeAlterado,
      email: emailAlterado,
      telefone: telefoneAlterado,
    };

    const response = await fetch(`${url}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(alteracoes),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const data = await response.json();
  } catch (error) {
    console.error("Erro ao alterar usuário:", error);
  }
}

export async function deleteUser(id: number) {
  try {
    const response = await fetch(`${url}/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    const result = await response.json();
    await getUsers();
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
  }
}

export async function addUser(nome: string, email: string, telefone: string) {
  try {
    const response = await fetch(`${url}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, telefone }),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    const newUser = await response.json();
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
  }
}
