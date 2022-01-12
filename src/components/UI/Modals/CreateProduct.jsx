import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {fetchTypes} from "../../../api/TypeApi";
import {observer} from "mobx-react-lite";
import {createProduct} from "../../../api/ProductApi";

const CreateProduct = observer(({show, onHide}) => {

        const {products} = useContext(Context)

        const [name, setName] = useState('')
        const [amount, setAmount] = useState(0)
        const [description, setDescription] = useState('')
        const [ageLimit, setAgeLimit] = useState(18)
        const [author, setAuthor] = useState('')
        const [yearOfPublication, setYearOfPublication] = useState(2022)
        const [file, setFile] = useState(null)

        useEffect(() => {
            fetchTypes().then(data => products.setTypes(data))
        }, [])

        const addProduct = () => {
            //TODO переделать на FormData
            const product = {
                name: name,
                amount: amount,
                description: description,
                ageLimit: ageLimit,
                author: author,
                yearOfPublication: yearOfPublication,
                genre: products.selectedType.name
            }

            createProduct(product)
                .then(data => {
                    console.log(data)
                    onHide()
                })
                .catch(error => {
                    console.log(error)
                })
        }

        const selectFile = e => {
            setFile(e.target.value[0])
        }

        return (
            <Modal
                show={show}
                onHide={onHide}
                size={"lg"}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown className={"mt-2 mb-2"}>
                            <Dropdown.Toggle>
                                {products.selectedType.name || 'Select type'}
                            </Dropdown.Toggle>
                            <DropdownMenu>
                                {products.types.map(type =>
                                    <Dropdown.Item
                                        key={type.id}
                                        onClick={() => products.setSelectedType(type)}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                        <Form.Control
                            className="mt-3"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Input book name"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Input book amount"
                            value={amount}
                            onChange={e => setAmount(Number(e.target.value))}
                            type="number"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Input book description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Input book age limit"
                            type="number"
                            value={ageLimit}
                            onChange={e => setAgeLimit(Number(e.target.value))}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Input book author"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            type="file"
                            onChange={selectFile}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Input book year of publishing"
                            type="number"
                            value={yearOfPublication}
                            onChange={e => setYearOfPublication(Number(e.target.value))}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant={"outline-danger"}
                        onClick={onHide}
                    >
                        Close
                    </Button>
                    <Button
                        variant={"outline-success"}
                        onClick={addProduct}
                    >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
)

export default CreateProduct;