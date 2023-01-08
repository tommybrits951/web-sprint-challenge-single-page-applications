import * as yup from "yup"

const schema = yup.object().shape({
    name: yup.string().min(2, "name must be at least 2 characters").required(),
    size: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    mushrooms: yup.boolean(),
    special: yup.string()
})
export default schema