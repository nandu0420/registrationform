
import * as yup from 'yup';
export const userSchema=yup.object().shape({
    studentname: yup.string().required('student name is required and can contain text and space only only').matches(/^[a-zA-Z ]*$/),
    Dob:yup.string().required('date of birth is required'),
    CLASS:yup.string().required('class of study is required'),
    Division:yup.string().required('division of class of study is required'),
    Gender:yup.string().required('gender required'),
})
