import {observer} from "mobx-react-lite";
import {Pagination} from "react-bootstrap";
import {useContext} from "react";
import {Context} from "../../../index";

const Pages = observer(() => {

    const {products} = useContext(Context)
    const pages = []

    for (let i = 0; i < products.totalPage; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={products.page === page}
                    onClick={() => products.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
})

export default Pages;