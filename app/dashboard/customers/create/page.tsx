import { fetchCustomers } from "@/app/lib/data";
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create Customers',
};


export default async function Page() {
    const customers = await fetchCustomers()
    
    return(
        <main>
        <Breadcrumbs
            breadcrumbs={[
                { label: 'Customer', href: '/dashboard/customers'},
                {
                    label: 'Create Customer',
                    href: '/dashboard/customers/create',
                    active: true,
                }
            ]}
        />
        <Form customers={customers} />
    </main>
)
};