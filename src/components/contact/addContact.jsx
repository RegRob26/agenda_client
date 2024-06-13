import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast.js';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addContact } from '@/services/contacts/contacts.js';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';

function AddContact(props) {
    {
        const [isSignUp, setIsSignUp] = useState(true);
        const [moreData, setMoreData] = useState(false);
        const navigate = useNavigate();
        const { toast } = useToast();

        function showToast(message, status) {
            let statusType = 'success'
            let variant = 'success'
            if (status !== 201) {
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
            },
        })

        async function onSubmit() {
            const data = form.getValues();
            setIsSignUp(true);
            await addContact(data).then((response) => {
                console.log(response);
                if (response.message) {
                    showToast(response.message, response.statusCode)
                    if (response.statusCode === 201) {
                        form.reset();
                        setTimeout(() => {

                        }, 2000)
                    }
                }
            })
        }

        return (
            <div className='relative pb-20'>
                <div className='flex flex-col md:flex-row mr-4 '>
                    <div className='md:mx-auto justify-center py-10'>
                        <div>
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Registra un nuevo contacto
                            </h2>
                        </div>
                        <p className=" text-center text-sm text-gray-500 py-5">
                            <a onClick={() => {
                                setMoreData(!moreData);
                                console.log('moreData', moreData);
                            }}
                               className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Mostrar {!moreData ? 'más' : 'menos'} campos
                            </a>
                        </p>
                        <div className=" px-8 md:mx-auto md:max-w-sm">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)}
                                      className="grid grid-cols-1 gap-6 md:grid-cols-2">

                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <div>
                                                <FormItem>
                                                    <FormLabel>Nombre</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={'nombre'} {...field}
                                                               autoComplete="first_name"
                                                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            </div>
                                        )}
                                    />

                                    <div
                                        className={moreData ? 'block' : 'hidden'}
                                    >
                                        <FormField
                                            control={form.control}
                                            name="middle_name"
                                            render={({ field }) => (
                                                <div>
                                                    <FormItem>
                                                        <FormLabel>Segundo Nombre</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder={'opcional'} {...field}
                                                                   autoComplete="middle_name"
                                                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                </div>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({ field }) => (
                                            <div>
                                                <FormItem>
                                                    <FormLabel>Apellido paterno</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={'Apellido'} {...field}
                                                               autoComplete="last_name"
                                                               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            </div>
                                        )}
                                    />
                                    <div
                                        className={moreData ? 'block' : 'hidden'}
                                    >
                                        <FormField
                                            control={form.control}
                                            name="second_last_name"
                                            render={({ field }) => (
                                                <div>
                                                    <FormItem>
                                                        <FormLabel>Apellido materno</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder={'Apellido'} {...field}
                                                                   autoComplete="second_last_name"
                                                                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                                        sm:text-sm sm:leading-6" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                </div>
                                            )}
                                        />
                                    </div>

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
                                    <div>
                                        <Button
                                            type="submit"
                                            disabled={!isSignUp}
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Agregar
                                        </Button>
                                    </div>
                                </form>
                            </Form>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AddContact;