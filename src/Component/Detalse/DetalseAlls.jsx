import React from 'react'
import { Button, Card, Col, Container, Row, } from 'react-bootstrap'
import AlctData from '../Data/AllcktData'
import FormatCurrency from '../Catagory/FormatCarncy'
import { useShoppingCart } from '../Context/ShoppingCartContacxt'
import AlackserMapy from '../HomePage/AlackserMapy'

const DetalseAlls = ({id}) => {
  const {increaseCartItems, getItemsQuantity,decraseCartItem,removeItemCartItem,AddToDetalse} = useShoppingCart();
  const quantity =  getItemsQuantity(id)

  const item = AlctData.find(i => i.id === id)
  if(item == null)return null;

  return (
   <Col style={{ width:'90%', height:'15rem'}}>
  
            <Card className='d-flex my-2rem m-12rem flex-row' xs='flex-colunm' gap={2} style={{width:'100%'}}>
                <div>
                    <img src={item.img} alt='img-detalse'/>
                </div>

                <div>
                  <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <p>prise: {FormatCurrency(item.price)}</p>
                      <div className='mt-auto'>
                  {quantity === 0 ? <Button className='w-100' onClick={() => increaseCartItems(id)}>Add to Cart</Button> :
                  <div className='d-flex align-items-center flex-column' style={{gap:'0.5rem'}}>
                      <div className='d-flex justify-content-center align-items-center' style={{gap:'0.5rem'}}>
                          <Button onClick={() => increaseCartItems(id)}>+</Button>
                            <span className='fs-3'>{quantity} in Cart</span>
                          <Button onClick={() => decraseCartItem(id)}>-</Button>
                      </div>
                      <Button variant='danger' size='sm' onClick={() => removeItemCartItem(id)} >Remove</Button>
                      </div>}
              </div>

              {/* <Link to='/detalseCard'>Detalse</Link> */}
                    </Card.Body>
                </div>
                
            </Card>
   
   </Col>
  )
}

export default DetalseAlls