import React, { useEffect, useState } from 'react';

const Services = () => {
        const [posts,setPosts] = useState([]);
        useEffect(() => {
            fetch('https://api.instantwebtools.net/v1/passenger?page=0&size=10')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data.data);            
            }
        )
        .catch((err) => {
            console.log(err.message);
        });
    },[]);


    return (
        <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Airline Data</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div class="row">
  
                
                {posts.map((post) => {
                  return (
                    
                    <div class="col-lg-6">
                    <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                            <div class="member-info">
                                <div>
                                    <h4>{post.airline[0].name}</h4>                                
                                    <img src={post.airline[0].logo} width="200px;"/>
                                </div>
                                <a href={post.airline[0].website} target="_blank">Visit site</a>
                        </div>
                        
                    </div>
                    </div>
                  )})
                }
                
  
          </div>
  
        </div>
      </section>

    )
}
export default Services;