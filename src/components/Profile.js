function MyButton() {
    return <>
        <button>I'm a button</button>
    </>
}

export default function Profile(props) {

    return <>
        <img
            src={props.img}
            alt={props.alt}
            title={props.title}
        ></img>
        <div>
            {props.children}
        </div>
        <div>
            <MyButton/>
        </div>
    </>
}