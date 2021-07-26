import React from "react";
import Jumbotron from "../partials/Jumbotron";
import Container from "react-bootstrap/Container";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

const Book = () => {
    // const [order, setOrder] = useState([]);

    // useEffect(() => {
    //     fetch(
    //         "https://square.site/appointments/buyer/widget/ewe7vqeto5h4dn/LD91QMJZ61CSM"
    //     )
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res);
    //             setOrder(res);
    //         });
    // }, []);

    //  <Container>
    //      <div className="embed-responsive embed-responsive-16by9">
    //          <div style={{ width: "100%", minHeight: "800px" }}>
    //              <ResponsiveEmbed aspectRatio="16by9">
    //                  <embed
    //                      style={{ width: "100%", height: "800px" }}
    //                      type="image/svg+xml"
    //                      src="https://square.site/appointments/buyer/widget/ewe7vqeto5h4dn/LD91QMJZ61CSM"
    //                  />
    //              </ResponsiveEmbed>
    //          </div>
    //      </div>
    //  </Container>;

    return (
        <main>
            <Jumbotron title="Ready To Learn?" />
            <Container>
                <div className="embed-responsive embed-responsive-16by9">
                    <div style={{ width: "100%", minHeight: "800px" }}>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <embed
                                style={{ width: "100%", height: "800px" }}
                                type="image/svg+xml"
                                src="https://square.site/appointments/buyer/widget/ewe7vqeto5h4dn/LD91QMJZ61CSM"
                            />
                        </ResponsiveEmbed>
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default Book;
