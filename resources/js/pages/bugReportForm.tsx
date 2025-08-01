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
                        <form method="POST" action='/submitbugreport'>
                            {/* title */}
                            <label className='text-gray-700 mr-1 ml-5'>Title:</label>
                            <input className='border rounded text-black' type='text' name="title" placeholder='required' required />

                            {/* description */}
                            <label className='text-gray-700 mr-1 ml-5 '>Description:</label>
                            <input className='border rounded text-black' type='text' name="description" placeholder='optional' />

                            {/* severity */}
                            <label className='text-gray-700 mr-1 ml-5'>Severity:</label>
                            <select className='border rounded text-gray-700 p-1' name="severity" defaultValue="medium">
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>

                            {/* submit button */}
                            <button className="border rounded bg-gray-700 mx-10 p-1" type='submit'>Submit Bug Report</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
}
