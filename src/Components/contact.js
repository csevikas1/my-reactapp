import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            location: {
                address: 'A108 Adam Street, New York',
                postcode: 'NY 535022'
            },
            email: "info@example.com",
            phone: "+1 5555 8288 2929",
            name: "",
            subject: "",
            message: ""            
        }

    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title:this.state.name,    
            body: this.state.subject,
            userid:Math.random().toString(36).slice(2),
 
          })
          .then((response) => {
            console.log(response);
            alert("success");
          });
      
    };



    render() {
        const {location, email, phone} = this.state;
        return (
            <section id="contact" class="contact">
                <div class="container" data-aos="fade-up">
        
                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
        
                    <div class="row">
            
                        <div class="col-lg-5 d-flex align-items-stretch">
                        <div class="info">
                            <div class="address">
                            <i class="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>{location.address}
                            <br/>
                            {location.postcode}</p>
                            </div>
            
                            <div class="email">
                            <i class="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>{email}</p>
                            </div>
            
                            <div class="phone">
                            <i class="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>{phone}</p>
                            </div>
              </div>
            
                        </div>
            
                        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form class="php-email-form" onSubmit={this.handleSubmit}>
                            <div class="row">
                            <div class="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" 
                                name="name" 
                                class="form-control" 
                                id="name" 
                                required 
                                value={this.state.name}
                                onChange= {event => this.setState({name:  event.target.value})} />
                            </div>
                            </div>
                            <div class="form-group">
                            <label for="name">Subject</label>
                            <input type="text" 
                            class="form-control" 
                            name="subject" 
                            id="subject" 
                            required value={this.state.subject}
                            onChange= {event => this.setState({subject: event.target.value})}/>
                            </div>
                            <div class="form-group">
                            <label for="name">Message</label>
                            <textarea class="form-control" name="message" rows="10" required>{this.state.message}</textarea>
                            </div>
                            
                            <div class="text-center"><button type="submit">Send Message</button></div>
                        </form>
                        </div>
            
                    </div>
          
                </div>
          </section>
        )
    }
}
export default Contact;
