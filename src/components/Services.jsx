import Cards from './ServiceCards';
import data from "../data/servicesSection.json";

const Services = () => {

    return (
        <section className="services" >
            <div className="header-services">
                <h2>{data.title}</h2>
            </div>
            <div className="container-services">
                <div className="grid-services">
                    {data.blocks.map(service =>
                        <Cards
                            id={service.id}
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            answer={service.answer}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Services