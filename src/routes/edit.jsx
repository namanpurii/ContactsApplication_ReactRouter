import { Form, useLoaderData, redirect, useNavigate} from "react-router-dom";
import {updateContact} from "../contacts";

export async function action({request, params}) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}
export function EditContact() {
    const {contact} = useLoaderData();
    const navigate = useNavigate();
    return (
        <Form method="post" id='contact-form'>
            <p>
                <span>Name</span>
                <input
                    placeholder="First"
                    aria-label="First Name" 
                    type="text" 
                    name="first"
                    defaultValue={contact.first}    
                />
                <input
                    placeholder="Last"
                    aria-label="Last Name" 
                    type="text" 
                    name="last"
                    defaultValue={contact.last}    
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    placeholder="@jack" 
                    type="text" 
                    name="twitter"
                    defaultValue={contact.twitter}    
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    placeholder="https://example.com/avatar.jpg"
                    aria-label="Avatar URL" 
                    type="text" 
                    name="avatar"
                    defaultValue={contact.avatar}    
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea name="notes" defaultValue={contact.notes} rows={6}></textarea>
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button" onClick={()=>{navigate(-1)}}>Cancel</button>
            </p>
        </Form>
    );
}