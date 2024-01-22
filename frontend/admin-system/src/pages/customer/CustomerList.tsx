import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, searchCustomers } from './CustomerApi';
import Customer from './Customer';

const CostumerList: React.FC = () => {
    const { name } = useParams<{ name: string; }>();

    const [customers, setCustomers] = useState<Customer[]> ([]);
    const history = useHistory();
    
    useEffect(() => {
        search();
    }, [history.location.pathname]);
    const search = async () => {
        let result = await searchCustomers();
        setCustomers(result);
    }

    const remove = async (id: string) => {
        await removeCustomer(id);
        search();
    }

    const addCustomer = () => {
        history.push('/page/customer/new');
    }

    const editCustomer = (id:string) => {
        history.push('/page/customer/' + id);
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
                        <IonTitle>Gestión de Clientes</IonTitle>
                        <IonItem>
                            <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end" size="default">
                                <IonIcon icon={add} />
                                Agregar Cliente
                            </IonButton>
                        </IonItem>

                        <IonGrid className="table">
                            <IonRow>
                                <IonCol>Nombre</IonCol>
                                <IonCol>Email</IonCol>
                                <IonCol>Teléfono</IonCol>
                                <IonCol>Dirección</IonCol>
                                <IonCol>Acciones</IonCol>
                            </IonRow>

                            {customers.map((client: Customer) =>
                                <IonRow>
                                    <IonCol>{client.firstName} {client.lastName}</IonCol>
                                    <IonCol>{client.email}</IonCol>
                                    <IonCol>{client.phone}</IonCol>
                                    <IonCol>{client.address}</IonCol>
                                    <IonCol>
                                        <IonButton color="primary" fill="clear"
                                            onClick={() => editCustomer(String(client.id))}>
                                            <IonIcon icon={pencil} slot="icon-only" />
                                        </IonButton>

                                        <IonButton color="danger" fill="clear"
                                            onClick={() => remove(String(client.id))}>
                                            <IonIcon icon={close} slot="icon-only" />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            )}

                        </IonGrid>
                    </IonCard>


                </IonContent>
            </IonContent>
        </IonPage>
    );
};

export default CostumerList;
