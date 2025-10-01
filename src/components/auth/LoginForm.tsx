import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuthStore } from '@/stores/auth-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
const formSchema = z.object({
  email: z.string().email('Invalid email address.'),
  password: z.string().min(6, 'Password must be at least 6 characters.'),
});
type LoginFormValues = z.infer<typeof formSchema>;
export const LoginForm = () => {
  const { setAuthView, login } = useAuthStore();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  function onSubmit(values: LoginFormValues) {
    // Mock login: extract name from email
    const name = values.email.split('@')[0];
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    login(capitalizedName);
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jane.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary-blue hover:bg-primary-blue/90">
            Sign In
          </Button>
        </form>
      </Form>
      <div className="relative my-6">
        <Separator />
        <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-2 text-sm text-gray-500">OR</span>
      </div>
      <Button variant="outline" className="w-full">
        {/* In a real app, you'd have an icon here */}
        Sign in with Google
      </Button>
      <p className="text-center text-sm text-gray-600 mt-6">
        Don't have an account?{' '}
        <Button variant="link" className="p-0 h-auto" onClick={() => setAuthView('signup')}>
          Sign Up
        </Button>
      </p>
    </motion.div>
  );
};