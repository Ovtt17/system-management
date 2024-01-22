import Supplier from "./Supplier";

const apiPath = import.meta.env.VITE_REACT_APP_API;

export async function searchSuppliers() {
    try {
        let url = apiPath + 'suppliers';
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
        console.error('Error al buscar proveedores:', error);
        throw error;
    }
}

export async function removeSupplier(id: string) {
    try {
        let url = apiPath + 'suppliers/' + id;
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error al eliminar proveedor:', error);
        throw error;
    }
}

export async function saveSupplier(supplier: Supplier) {
    try {
        let url = apiPath + 'suppliers';
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(supplier),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error al guardar proveedor:', error);
        throw error;
    }
}

export async function searchSupplierById(id: string) {
    try {
        let url = apiPath + 'suppliers/' + id;
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
        console.error('Error al buscar proveedor por ID:', error);
        throw error;
    }
}
