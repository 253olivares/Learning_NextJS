
import { lusitana } from "../ui/fonts";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "../lib/data";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";
import { Card } from "../ui/dashboard/cards";

const Page = async () => {

  const data = await Promise.all([
    await fetchRevenue(),
    await fetchLatestInvoices(),
    await fetchCardData()
  ])

  return (
    <main>
      <h1 className={`
        ${lusitana.className}

        mb-4

        text-xl

        md:text-2xl
      `}>
        Dashboard
      </h1>
      <div className="
      
      grid

      gap-6

      sm:grid-cols-2

      lg:grid-cols-4  
      
      ">
        <Card title="Collected" value={data[2].totalPaidInvoices} type="collected" />
        <Card title="Pending" value={data[2].totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={data[2].numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={data[2].numberOfCustomers}
          type="customers"
        />
      </div>

      <div className="
      mt-6
      grid
      grid-cols-1
      gap-6
      md:grid-cols-4
      lg:grid-cols-8
      ">
        <RevenueChart revenue={data[0]} />
        <LatestInvoices latestInvoices={data[1]} />
      </div>
    </main>
  )
}

export default Page;