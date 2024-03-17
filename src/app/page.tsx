import { PopularReleases } from "@components/mainpage/PopularReleases";
import { SearchForm } from "@components/mainpage/SearchForm";

export default function Home() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                padding: "10%",
                gap: "50px",
            }}>
            <div style={{ width: "50%" }}>
                <SearchForm />
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>
            </div>

            <PopularReleases />
        </main>
    );
}
