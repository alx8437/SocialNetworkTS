import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostPropsType} from "../../../redux/rootStateTypes";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


type PropsType = {
    posts: Array<PostPropsType>
    addPostAC: (newPostMessage: string) => void
}

type AddPostFormDataType = {
    newPostMessage: string
}

const maxLength50 = maxLengthCreator(50);


const MyPosts = React.memo((props: PropsType) => {

    const postsElements = props.posts.map(p => <Post
        key={p.id}
        id={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />)

    const addPost = (values: AddPostFormDataType) => {
        props.addPostAC(values.newPostMessage)
    }

    return (
        <div className={styles.postWrapper}>
            <AddPostReduxForm onSubmit={addPost}/>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    return (
        <form className={styles.postBlock} onSubmit={props.handleSubmit}>
            <div className={styles.textarea}>
                <div className={styles.textarea}>
                    <Field
                        component={Textarea}
                        name={"newPostMessage"}
                        placeholder={"Enter your post"}
                        validate={[required, maxLength50]}
                    />
                </div>
            </div>
            <div>
                <button className={styles.button}>AddPost</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<AddPostFormDataType>({form: "addPostForm"})(AddPostForm);

export default MyPosts;
