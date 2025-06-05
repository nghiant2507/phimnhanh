'use client';

import { Funnel } from 'lucide-react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { buildSearchParams, IParams } from '~/core';
import { Button } from '~/core/ui/button';
import { Form, FormControl, FormField, FormItem } from '~/core/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/core/ui/select';

export const FillterComponent = () => {
  const form = useForm<IParams>({
    defaultValues: {
      sort_field: 'modified.time',
    },
  });

  const onSubmit = useCallback((data: IParams) => {
    const queryString = buildSearchParams(data);

    console.log(queryString);
  }, []);

  return (
    <div
      className={
        'border border-border rounded-md flex flex-col gap-4 p-4 bg-zinc-900'
      }
    >
      <div className={'flex items-center gap-2'}>
        <Funnel size={20} />
        <span>Bộ lọc</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 grid grid-cols-2 gap-3"
        >
          <div className={'grid gap-2 bg-zinc-800 p-4 rounded-md'}>
            <p className={'text-sm font-medium'}>Sắp xếp theo:</p>
            <FormField
              control={form.control}
              name="sort_field"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger size={'md'} className="w-full">
                        <SelectValue placeholder="Mới cập nhập" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modified.time">
                          Mới cập nhập
                        </SelectItem>
                        <SelectItem value="_id">Thời gian đăng</SelectItem>
                        <SelectItem value="year">Năm sản xuất</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sort_field"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger size={'md'} className="w-full">
                        <SelectValue placeholder="Mới cập nhập" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modified.time">
                          Mới cập nhập
                        </SelectItem>
                        <SelectItem value="_id">Mới nhất</SelectItem>
                        <SelectItem value="year">Cũ nhất</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sort_field"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger size={'md'} className="w-full">
                        <SelectValue placeholder="Mới cập nhập" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modified.time">
                          Mới cập nhập
                        </SelectItem>
                        <SelectItem value="_id">Thời gian đăng</SelectItem>
                        <SelectItem value="year">Năm sản xuất</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className={'grid gap-2 bg-zinc-800 p-4 rounded-md'}>
            <p className={'text-sm font-medium'}>Lọc Nội dung:</p>

            <FormField
              control={form.control}
              name="sort_field"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger size={'md'} className="w-full">
                        <SelectValue placeholder="Mới cập nhập" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modified.time">
                          Mới cập nhập
                        </SelectItem>
                        <SelectItem value="_id">Thời gian đăng</SelectItem>
                        <SelectItem value="year">Năm sản xuất</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sort_field"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger size={'md'} className="w-full">
                        <SelectValue placeholder="Mới cập nhập" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modified.time">
                          Mới cập nhập
                        </SelectItem>
                        <SelectItem value="_id">Mới nhất</SelectItem>
                        <SelectItem value="year">Cũ nhất</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sort_field"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger size={'md'} className="w-full">
                        <SelectValue placeholder="Mới cập nhập" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modified.time">
                          Mới cập nhập
                        </SelectItem>
                        <SelectItem value="_id">Thời gian đăng</SelectItem>
                        <SelectItem value="year">Năm sản xuất</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className={'col-span-2 flex justify-end'}>
            <Button type="submit">Tìm kiếm</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
