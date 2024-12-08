import Profile from "./Profile"
import TodoList from "./TodoList"
import PackingList from "./PackingList"
import List from "./List"
import JobList from "./JobList"
export default function Gallery() {
    return <>
        <section>
            <h1>Amazing Scientists</h1>
            <Profile title="Katherine Johnson" alt="Katherine Johnson" img="https://i.imgur.com/MK3eW3Am.jpg">
                children
            </Profile>
            <Profile title="Katherine Johnson" alt="Katherine Johnson" img="https://i.imgur.com/MK3eW3Am.jpg">
                children
            </Profile>
            <Profile title="Katherine Johnson" alt="Katherine Johnson" img="https://i.imgur.com/MK3eW3Am.jpg">
                children
            </Profile>
            <TodoList></TodoList>
            <PackingList/>
            <List></List>
            <JobList></JobList>
        </section>
    </>
}