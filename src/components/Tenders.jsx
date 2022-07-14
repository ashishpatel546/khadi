import React from "react";
import NavBar from "./NavBar";
import { Table } from "react-bootstrap";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import ExampleDoc from '../static/tenders/1912910_Assignment1.pdf'

const Tenders = () => {
    return (
        <>
        <div className="tender">
            <NavBar />
            <h1 className="text-center mt-5 mb-5 about-text" >Tenders</h1>

            

            <Table striped bordered hover className="mt-5">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Particulars</th>
                        <th>Open Date</th>
                        <th>Close Date</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tender 1</td>
                        <td>20/07/2022</td>
                        <td>27/07/2022</td>
                        <td><a href={ExampleDoc} download="MyExampleDoc" target='_blank'>
                            <Button variant="info"><i class="fa-solid fa-download"></i></Button>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Tender 2</td>
                        <td>01/08/2022</td>
                        <td>05/08/2022</td>
                        <td><Button variant="info"><i class="fa-solid fa-download"></i></Button></td>
                    </tr>
                    
                </tbody>
            </Table>

        </div>
        {/* <Footer/> */}
        </>
    )
}

export default Tenders;