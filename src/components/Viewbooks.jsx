import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewbooks = () => {
    const [bookname, xbookname] = useState(
        [
            { "bookname": "To Kill a Mockingbird", "Description": "A novel about racial injustice and childhood innocence in the Deep South.", "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFbqVtvcdIMuLBpDGJaZ9ms8d0d78ne7rVw&s" },
            { "bookname": "1984", "Description": "A dystopian novel set in a totalitarian regime that watches everyone.", "poster": "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg" },
            { "bookname": "The Great Gatsby", "Description": "A critique of the American Dream set in the Roaring Twenties.", "poster": "https://m.media-amazon.com/images/I/81af+MCATTL._AC_UF1000,1000_QL80_.jpg" },
            { "bookname": "The Alchemist", "Description": "A philosophical tale about finding one's destiny.", "poster": "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg" },
            { "bookname": "Harry Potter and the Sorcerer's Stone", "Description": "The first book in the magical journey of a young wizard.", "poster": "https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg" },
            { "bookname": "The Hobbit", "Description": "A fantasy adventure about Bilbo Baggins and a quest to reclaim treasure.", "poster": "https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UF1000,1000_QL80_.jpg" },
            { "bookname": "Pride and Prejudice", "Description": "A classic romance exploring manners and marriage in 19th-century England.", "poster": "https://m.media-amazon.com/images/I/712P0p5cXIL._UF1000,1000_QL80_.jpg" },
            { "bookname": "The Catcher in the Rye", "Description": "A rebellious teen's perspective on the adult world.", "poster": "https://m.media-amazon.com/images/I/91fQEUwFMyL._UF1000,1000_QL80_.jpg" },
            { "bookname": "Sapiens", "Description": "A brief history of humankind exploring evolution and culture.", "poster": "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg" },
            { "bookname": "The Book Thief", "Description": "A story of a girl in Nazi Germany who finds solace in books.", "poster": "https://m.media-amazon.com/images/I/91ndEtx1uWL._UF1000,1000_QL80_.jpg"}
        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 c0l-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {bookname.map(
                                (value, index) => {
                                    return (
                                        <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                                            <div class="card h-100">
                                                <img src={value.poster} class="card-img-top"
                                                    alt="" height={400} width={100}></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.bookname}</h5>
                                                    <p class="card-text flex-grow-1">{value.Description}</p>
                                                    <a href="#" class="btn btn-primary mt-auto">Buy Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewbooks