export const Contact=()=>{

    const handleFormSubmit=(formData)=>{
        console.log(formData.entries());  
    }

    return(
        <section className="section-contact">
            <h2 className="container-title">
                Contact Us
            </h2>
            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input type="text" name="username" required autoComplete="off" placeholder="Enter your name" className="form-control"/>
                    <input type="email" name="email" required autoComplete="off" placeholder="Enter your e-mail" className="form-control"/>
                    <textarea name="message" rows="10" required autoComplete="off" placeholder="Enter your message" className="form-control"></textarea>
                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>
    )
}