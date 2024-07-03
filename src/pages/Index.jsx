import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Index = () => {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Finance Dashboard</h1>
        <div className="relative">
          <button className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="User Profile" className="mx-auto object-cover w-10 h-10 rounded-full" />
            <span>Profile</span>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">$10,000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">$5,000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">$3,000</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>01/01/2023</TableCell>
              <TableCell>Salary</TableCell>
              <TableCell>$3,000</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>01/02/2023</TableCell>
              <TableCell>Groceries</TableCell>
              <TableCell>$200</TableCell>
              <TableCell>Pending</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>01/03/2023</TableCell>
              <TableCell>Rent</TableCell>
              <TableCell>$1,000</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <footer className="text-center mt-8">
        <p>© 2023 Finance Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;