import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Project from "./pages/Project";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                clients: {
                    merge(existing, incoming) {
                        return incoming;
                    }
                },
                projects: {
                    merge(existing, incoming) {
                        return incoming;
                    }
                }
            }
        }
    }
});

const client = new ApolloClient({
    // uri: 'https://ancient-crag-88962.herokuapp.com/graphql',
    uri: 'http://localhost:5000/graphql',
    cache: cache,
})

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Router>
                    <Header />
                    <div className="container mt-3">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/projects/:id" element={<Project />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </Router>
            </ApolloProvider>
        </>
    );
}

export default App;
