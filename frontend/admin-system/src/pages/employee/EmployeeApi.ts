import Employee from "./Employee";
const apiPath = import.meta.env.VITE_REACT_APP_API;

export async function searchEmployees() {
    try {
        let url = apiPath + 'employees';
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
        console.error('Error al buscar empleados:', error);
        throw error;
    }
}

export async function removeEmployee(id: string) {
    try {
        let url = apiPath + 'employees/' + id;
        await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error al eliminar empleado:', error);
        throw error;
    }
}

export async function saveEmployee(employee: Employee) {
    try {
        let url = apiPath + 'employees';
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error al guardar empleado:', error);
        throw error;
    }
}

export async function searchEmployeeById(id: string) {
    try {
        let url = apiPath + 'employees/' + id;
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
        console.error('Error al buscar empleado por ID:', error);
        throw error;
    }
}
