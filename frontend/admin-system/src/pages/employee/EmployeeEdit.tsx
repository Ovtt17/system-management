import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeEmployee, saveEmployee, searchEmployeeById, searchEmployees } from './EmployeeApi';
import Employee from './Employee';

const EmployeeEdit: React.FC = () => {
    const { name } = useParams<{ name: string; }>();

    const [employee, setEmployee] = useState<Employee>({});

    const history = useHistory();
    const routeMatch: any = useRouteMatch('/page/employee/:id');
    const id = routeMatch?.params?.id;

    useEffect(() => {
        search();
    }, [history.location.pathname]);
    const search = async () => {
        if (id === 'new') {
            setEmployee({});
        } else {
            let result = await searchEmployeeById(id);
            setEmployee(result);
        }
    }

    const save = async () => {
        await saveEmployee(employee);
        history.push('/page/employees');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonCard>
                        <IonTitle>{id === 'new' ? 'Agregar Empleado' : 'Editar Empleado'}</IonTitle>

                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Nombre</IonLabel>
                                    <IonInput onIonChange={e => employee.firstName = String(e.detail.value)} 
                                    value={employee.firstName}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Apellido</IonLabel>
                                    <IonInput onIonChange={e => employee.lastName = String(e.detail.value)} 
                                    value={employee.lastName}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Email</IonLabel>
                                    <IonInput onIonChange={e => employee.email = String(e.detail.value)} 
                                    value={employee.email}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Direccion</IonLabel>
                                    <IonInput onIonChange={e => employee.address = String(e.detail.value)} 
                                    value={employee.address}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Teléfono</IonLabel>
                                    <IonInput onIonChange={e => employee.phone = String(e.detail.value)} 
                                    value={employee.phone}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonLabel position="stacked">Salario</IonLabel>
                                    <IonInput onIonChange={e => employee.salary = Number(e.detail.value)} 
                                    value={employee.salary}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>

                        <IonItem>
                            <IonButton onClick={save} color="success" fill="solid" slot="end" size="default">
                                <IonIcon icon={checkmark} />
                                Guardar
                            </IonButton>
                        </IonItem>
                    </IonCard>


                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default EmployeeEdit;
