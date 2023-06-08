import React from 'react';
import style from 'styles/signin.module.css'
import Image from 'next/image';


function SignIn() {
    return (
        <div className={`${style.signin} absolute  inset-1/2  -translate-y-1/2 -translate-x-1/2`}>


            <div className={`${style.signin} pt-7 pb-12 border  rounded-xl `}>
                <div>
                    <Image src={'/icons/google.png'} className='m-auto' alt={''} width={80} height={80} />
                    <h1 className='text-center text-xl'>Choose an Account</h1>
                </div>
                <div className='px-10 mt-5'>
                    <div className='flex py-4 border-b border-gray-200'>
                        <Image src={'/icons/man.png'} alt={''} width={35} height={35} />
                        <div className='px-2'>
                            <h4 className='text-sm'>Sahil Ajmeri</h4>
                            <h6 className='text-gray-500 text-xs'>ajmerisahil94@gmail.com</h6>
                        </div>
                    </div>
                    <div className='flex py-4 border-b border-gray-300'>
                        <Image src={'/icons/man.png'} alt={''} width={35} height={35} />
                        <div className='px-2'>
                            <h4 className='text-sm font-semibold'>Sahil Ajmeri</h4>
                            <h6 className='text-gray-500 text-xs'>ajmerisahil94@gmail.com</h6>
                        </div>
                    </div>
                    <div className='flex items-center py-4 border-b border-gray-300'>
                        <Image src={'/icons/account.png'} alt={''} width={25} height={25} />
                        <div className='px-2'>
                            <h4 className='text-sm font-semibold'>Use another account</h4>
                        </div>
                    </div>
                    <div className='flex items-center py-4'>
                        <Image src={'/icons/remove-user.png'} alt={''} width={25} height={25} />
                        <div className='px-2'>
                            <h4 className='text-sm font-semibold'>Remove an Account</h4>
                            {/* <h6 className='text-gray-500 text-xs'>ajmerisahil94@gmail.com</h6> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div>English</div>
                <div className='flex justify-between gap-x-10'>
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>
        </div>
    );
}
export default SignIn;