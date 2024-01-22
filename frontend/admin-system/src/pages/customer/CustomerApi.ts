import Customer from "./Customer";
const apiPath = import.meta.env.VITE_REACT_APP_API;

export async function searchCustomers() {
    let url = apiPath + 'customers';
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error; // Puedes decidir si quieres lanzar el error nuevamente o manejarlo de otra manera.
    }
}

export async function removeCustomer(id: string) {
    try {
        let url = apiPath + 'customers/' + id;
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        throw error;
    }
}

export async function saveCustomer(customer: Customer) {
    try {
        let url = apiPath + 'customers';
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error al guardar el cliente:', error);
        throw error;
    }
}

export async function searchCustomerById(id: string) {
    try {
        let url = apiPath + 'customers/' + id;
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al buscar el cliente por ID:', error);
        throw error;
    }
}
