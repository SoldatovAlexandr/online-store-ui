import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../../index";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {fetchTypes} from "../../../api/TypeApi";
import {observer} from "mobx-react-lite";
import {updateProduct, uploadFile} from "../../../api/ProductApi";

const UpdateProduct = observer(({show, onHide, product}) => {

        const {products} = useContext(Context)

        const [id, setId] = useState(0)
        const [name, setName] = useState('')
        const [amount, setAmount] = useState(0)
        const [description, setDescription] = useState('')
        const [ageLimit, setAgeLimit] = useState(0)
        const [author, setAuthor] = useState('')
        const [yearOfPublication, setYearOfPublication] = useState(0)
        const [fileId, setFileId] = useState(null)

        useEffect(() => {
            fetchTypes().then(data => products.setTypes(data))
            setId(product.id)
            setName(product.name)
            setAuthor(product.author)
            setAmount(product.amount)
            setYearOfPublication(product.yearOfPublication)
            setAgeLimit(product.ageLimit)
            setDescription(product.description)
            setFileId(product.image)
        }, [product])

        const changeProduct = () => {
            const product = {
                id: id,
                name: name,
                amount: amount,
                description: description,
                ageLimit: ageLimit,
                author: author,
                yearOfPublication: yearOfPublication,
                genre: products.selectedType.name,
                image: fileId
            }

            updateProduct(product)
                .then(data => {
                    const pr = products.products.slice().map((obj) => {
                        if (obj.id === id) {
                            return product
                        } else return obj
                    })
                    products.setProducts(pr)
                    onHide()
                })
                .catch(error => {
                    console.log(error)
                })
        }

        const selectFile = e => {
            const formData = new FormData()
            formData.append('image', e.target.files[0])
            uploadFile(formData).then((data) => {
                setFileId(data.id)
            })
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
                        <div className="mt-3">Name</div>
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Input book name"
                        />
                        <div className="mt-3">Amount</div>
                        <Form.Control
                            placeholder="Input book amount"
                            value={amount}
                            onChange={e => setAmount(Number(e.target.value))}
                            type="number"
                        />
                        <div className="mt-3">Description</div>
                        <Form.Control
                            placeholder="Input book description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <div className="mt-3">Age limit</div>
                        <Form.Control
                            placeholder="Input book age limit"
                            type="number"
                            value={ageLimit}
                            onChange={e => setAgeLimit(Number(e.target.value))}
                        />
                        <div className="mt-3">Author</div>
                        <Form.Control
                            placeholder="Input book author"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                        />
                        <div className="mt-3">Book image</div>
                        <Form.Control
                            type="file"
                            onChange={selectFile}
                        />
                        <div className="mt-3">Year of publishing</div>
                        <Form.Control
                            placeholder="Input book year of publishing"
                            type="number"
                            value={yearOfPublication}
                            onChange={e => setYearOfPublication(Number(e.target.value))}
                        />
                        <Dropdown className={"mt-3 mb-2"}>
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
                        onClick={changeProduct}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
)

export default UpdateProduct;
