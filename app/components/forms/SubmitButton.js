import { useFormikContext } from 'formik'
import React from 'react'
import { } from 'react-native'
import AppButton from '../AppButton'

const SubmitButton = ({ title }) => {

    const { handleSubmit } = useFormikContext()

    return (
        <AppButton title={title} onPress={handleSubmit} />
    )
}

export default SubmitButton
