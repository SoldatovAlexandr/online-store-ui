import {observer} from "mobx-react-lite";
import React, {useContext, useState} from "react";
import {Context} from "../index";
import {Button, Card, Form, FormControl} from "react-bootstrap";
import {removeType} from "../api/TypeApi";
import ErrorModal from "./UI/Modals/ErrorModal";
import UpdateType from "./UI/Modals/UpdateType";

const TypeAdminList = observer(() => {

        const {products} = useContext(Context)
        const [selectedType, setSelectedType] = useState({id: 0, name: ''})
        const [errorVisible, setErrorVisible] = useState(false)
        const [updateTypeVisible, setUpdateTypeVisible] = useState(false)

        const remove = (type) => {
            removeType(type.id).then(data => {
                products.setTypes(products.types.filter(t => t.id !== type.id))
            }).catch(error => {
                setErrorVisible(true)
            })
        }

        const update = (type) => {
            setSelectedType(type)
            setUpdateTypeVisible(true)
        }

        return (
            <div className="mt-3">
                <Card
                    style={{border: '5x solid lightgray'}}
                >
                    <></>
                    {products.types.map(type =>
                        <div className="m-1 d-flex justify-content-between align-items-center">
                            <div className="ml-3">{type.name}
                            </div>
                            <div>
                                <Button variant="outline-info" onClick={() => update(type)} className="mr-3">Update</Button>
                                <Button variant="outline-danger" onClick={() => remove(type)}>Remove</Button>
                            </div>
                        </div>
                    )}
                </Card>
                <ErrorModal show={errorVisible} onHide={() => setErrorVisible(false)}
                            error="Can't delete type. Delete products with this type."/>
                <UpdateType show={updateTypeVisible} onHide={() => setUpdateTypeVisible(false)} type={selectedType}/>
            </div>
        );
    }
)
export default TypeAdminList;