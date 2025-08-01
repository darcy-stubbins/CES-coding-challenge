import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="CES Coding Challenge">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>


            <div className="rounded overflow-hidden shadow-lg mx-20">
                <div className="px-10 py-5">
                    <div className="font-bold text-xl mb-2 text-gray-700">Bug Report</div>

                    <div className="px-6 pt-4 pb-2">
                        <p className='text-gray-700 mb-3'>Bug Report Submitted Successfully!</p>
                        <a href='/' className='border rounded bg-gray-700 p-1'>Report Another Bug</a>
                    </div>
                </div>
            </div>


        </>
    );
}
