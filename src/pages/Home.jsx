import { React } from "react";

function Home() {
  return (
    <div className="home">
    <body class="d-flex flex-column ">
        <main class="flex-shrink-0">
            <header class="bg-blue-gradient py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">A quick way to learn music</h1>
                                <p class="lead fw-normal text-white-50 mb-4">Easily sign up with a teacher and start practicing your musical skills instantly.</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/login">Get Started</a>
                                    <a class="btn btn-outline-light btn-lg px-4" href="#learn">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..."/></div>
                    </div>
                </div>
            </header>
            <section class="py-5" id="features">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5 mb-lg-0"><h2 class="fw-bolder mb-0">A better way to start learning.</h2></div>
                        <div class="col-lg-8">
                            <div class="row gx-5 row-cols-1 row-cols-md-2">
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                                    <h2 class="h5">Easy To Use</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                                    <h2 class="h5">Better Learning</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div class="col mb-5 mb-md-0 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                                    <h2 class="h5">Music Reports</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div class="col h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                                    <h2 class="h5">Enhanced Skills</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-10 col-xl-7">
                            <div class="text-center">
                                <div class="fs-4 mb-4 fst-italic">"Using Apollo with my students has improved their sight reading tremendously. I can't imagine going back to written flashcards."</div>
                                <div class="d-flex align-items-center justify-content-center">
                                    <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..."/>
                                    <div class="fw-bold">
                                        Jane Nicholson
                                        <span class="fw-bold text-primary mx-1">/</span>
                                        MS in Music Education
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="py-5 bg-blue-gradient" id="learn">
                <div class="container px-5 my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <div class="text-center">
                                <h2 class="fw-bolder text-white" >Featured Exams</h2>
                                <p class="lead fw-normal text-white mb-5">These are public exams created by teachers and students. The highest rated of the week will get featured here. </p>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="https://dummyimage.com/600x350/ced4da/6c757d" alt="..."/>
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">Piano</div>
                                    <a class="text-decoration-none link-dark stretched-link" href="/challengeExam"><h5 class="card-title mb-3">Piano Sight Reading</h5></a>
                                    <p class="card-text mb-0">Master your sight reading skills with this new list of flashcards. </p>
                                </div>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="small">
                                                <div class="fw-bold">Dillon Wattson</div>
                                                <div class="text-muted">January 12, 2022</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="https://dummyimage.com/600x350/adb5bd/495057" alt="..."/>
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">Trumpet</div>
                                    <a class="text-decoration-none link-dark stretched-link" href="/challengeExam"><h5 class="card-title mb-3">Basics of Trumpet</h5></a>
                                    <p class="card-text mb-0">Learn the basics of playing the trumpet through easy to use flashcards.</p>
                                </div>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <img class="rounded-circle me-3" src="https://dummyimage.com/40x40/ced4da/6c757d" alt="..."/>
                                            <div class="small">
                                                <div class="fw-bold">Josiah Barclay</div>
                                                <div class="text-muted">January 23, 2022</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <div class="card h-100 shadow border-0">
                                <img class="card-img-top" src="https://dummyimage.com/600x350/6c757d/343a40" alt="..."/>
                                <div class="card-body p-4">
                                    <div class="badge bg-primary bg-gradient rounded-pill mb-2">Piano</div>
                                    <a class="text-decoration-none link-dark stretched-link" href="/challengeExam"><h5 class="card-title mb-3">Piano Chords Made Easy</h5></a>
                                    <p class="card-text mb-0">These flashcards will make your chord recognition 20%.</p>
                                </div>
                                <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
                                    <div class="d-flex align-items-end justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <div class="small">
                                                <div class="fw-bold">Evelyn Martinez</div>
                                                <div class="text-muted">February 2, 2022</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

</body>
</div>

  );
}

export default Home;
