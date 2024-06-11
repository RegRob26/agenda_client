import React, { useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';
import { signUp } from '@/services/login/login.js';
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from 'react-router-dom';


function Signup(props) {
    const [isSignUp, setIsSignUp] = useState(true);
    const navigate = useNavigate();
    const { toast } = useToast();

    function showToast(message, status) {
        let statusType = 'success'
        let variant = 'success'
        if (status !== 201){
            console.log(status);
            statusType = 'error'
            variant = 'destructive'
        }
        console.log("statusType", statusType, "variant", variant, status);
        toast({
            title: message,
            variant: variant,
            type: statusType
        })
    }

    const schema = z.object({
        first_name: z.string().min(2, {
            message: 'El nombre debe tener al menos 2 caracteres'
        }),
        middle_name: z.string().optional({
            message: 'El segundo nombre debe tener al menos 2 caracteres'
        }),
        last_name: z.string().min(2, {
            message: 'El apellido debe tener al menos 2 caracteres'
        }),
        second_last_name: z.string().optional({
            message: 'El segundo apellido debe tener al menos 2 caracteres'
        }),
        phone: z.string().min(10, {
            message: 'El teléfono debe tener al menos 10 caracteres'
        }),

        email: z.string().email({
            message: 'Ingresa un correo válido'
        }),
        password: z.string().min(6, {
            message: 'La contraseña debe tener al menos 8 caracteres'
        }),

    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            first_name: '',
            middle_name: '',
            last_name: '',
            second_last_name: '',
            phone: '',
            email: '',
            password: '',
        },
    })


    async function onSubmit(event) {
        const data = form.getValues();
        setIsSignUp(true);
        await signUp(data).then((response) => {
            console.log(response);
            if (response.message) {
                showToast(response.message, response.statusCode)
                if (response.statusCode === 201) {
                    form.reset();
                    setTimeout(() => {
                        navigate('/signin')
                    }, 2000)
                }
            }
        })
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                <div className='md:mx-auto justify-center py-14'>
                    <div>
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://as2.ftcdn.net/v2/jpg/02/46/97/87/1000_F_246978786_dVxDq8tqCQ50NKxRj7CIzs6Gkt1tqfKJ.jpg"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Ingresa aquí tus datos
                        </h2>
                    </div>
                    <div className="mt-11 px-8 md:mx-auto md:max-w-sm">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="first_name"
                                    render={({ field }) => (
                                        <div>
                                            <FormItem>
                                                <FormLabel>Nombre</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={'nombre'} {...field} autoComplete="first_name"
                                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="middle_name"
                                    render={({ field }) => (
                                        <div>
                                            <FormItem>
                                                <FormLabel>Segundo Nombre</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={'opcional'} {...field} autoComplete="middle_name"
                                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="last_name"
                                    render={({ field }) => (
                                        <div>
                                            <FormItem>
                                                <FormLabel>Apellido paterno</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={'Apellido'} {...field} autoComplete="last_name"
                                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="second_last_name"
                                    render={({ field }) => (
                                        <div>
                                            <FormItem>
                                                <FormLabel>Apellido materno</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={'Apellido'} {...field} autoComplete="second_last_name"
                                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <div>
                                            <FormItem>
                                                <FormLabel>Correo</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={'correo'}  {...field} autoComplete="email"
                                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                   ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                   sm:text-sm sm:leading-6" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <div>
                                            <FormItem>
                                                <FormLabel>Teléfono</FormLabel>
                                                <FormControl>
                                                    <Input placeholder={'teléfono'} {...field} autoComplete="phone"
                                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <div>
                                            <FormItem>
                                                <FormLabel>Contraseña</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder={'contraseña'}  {...field}
                                                           autoComplete="password"
                                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <div>
                                            <FormItem>
                                                <FormLabel>Contraseña</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder={'contraseña'}  {...field}
                                                           autoComplete="password"
                                                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        </div>
                                    )}
                                />

                                <div>
                                    <Button
                                        type="submit"
                                        disabled={!isSignUp}
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Ingresar
                                    </Button>
                                </div>
                            </form>
                        </Form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            ¿Aún no tienes una cuenta? {' '}
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Prueba la app
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Signup;