import React from 'react';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button.jsx';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signIn, signUp } from '@/services/login/login.js';
import { useToast } from '@/components/ui/use-toast.js';

function Login(props) {
    const navigate = useNavigate();
    const { toast } = useToast();
    const schema = z.object({
        email: z.string().email({
            message: 'Ingresa un correo válido',
        }),
        password: z.string().min(6, {
            message: 'La contraseña debe tener al menos 8 caracteres',
        }),
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    });


    async function onSubmit(event) {
        const data = form.getValues();
        await signIn(data).then((response) => {
            //Hanlde here the login access
            if (response.statusCode===200 && response.access_token) {
                setTimeout(() => {
                    toast({
                        title: 'Bienvenido',
                        description: 'Has ingresado correctamente',
                        variant: 'success',
                    })
                    //Save the token in the cookies
                    document.cookie = `token=${response.access_token}`;
                    document.cookie = `user_id=${response.user_id}`;
                    navigate('/');
                }, 1000);
            }
            else {
            }
        })
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src="/4991945.jpg"
                         className="w-full hidden md:block"
                         alt="Imagen grande" />
                </div>
                <div className="md:w-1/2 py-14">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://as2.ftcdn.net/v2/jpg/02/46/97/87/1000_F_246978786_dVxDq8tqCQ50NKxRj7CIzs6Gkt1tqfKJ.jpg"
                            alt="Your Company"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Ingresa a tu cuenta
                        </h2>
                    </div>
                    <div className="mt-10 px-8 md:mx-auto md:max-w-sm">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                                {/*
                                    Maybe we can add a remember me checkbox
                                    maybe we can add a component to buttons
                                */}
                                <div>
                                    <Button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold
                                        leading-6 text-white shadow-sm bg-gradient-to-r from-blue-300 to-blue-500
                                        hover:from-blue-500 hover:to-blue-700
                                        focus-visible:outline focus-visible:outline-2
                                        focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Ingresar
                                    </Button>
                                </div>
                            </form>
                        </Form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            ¿Aún no tienes una cuenta? {' '}
                            <Link to="/signup"
                                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Prueba la app
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;