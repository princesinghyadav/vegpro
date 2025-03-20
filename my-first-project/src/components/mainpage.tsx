"use client"

import { Button, Field, Input, Stack } from "@chakra-ui/react"
import PasswordInput from "./ui/password-input"
import { useForm } from "react-hook-form"
// import { PasswordInput } from '@/components/ui/password-input';

interface FormValues {
username: string
password: string
}

    export default function Mainpage (){
const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<FormValues>()

const onSubmit = handleSubmit((data) => console.log(data ))

return (
    <div style={{margin:"auto", width:"60%" , marginTop:"20px"}} >
    <form onSubmit={onSubmit} >
    <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.username}>
        <Field.Label>Username</Field.Label>
        <Input {...register("username")} placeholder="Enter the username " />
        <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password}>
        <Field.Label>Password</Field.Label>
        <PasswordInput {...register("password")} placeholder="Enter the password"/>
        <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Submit</Button>
    </Stack>
    </form>
    </div>
)
}
