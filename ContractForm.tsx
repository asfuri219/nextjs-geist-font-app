"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";

interface ContractFormData {
  employeeName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  salary: string;
  workHours: string;
  jobDescription: string;
  additionalTerms: string;
}

export default function ContractForm() {
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState<ContractFormData | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<ContractFormData>();

  const onSubmit = (data: ContractFormData) => {
    setFormData(data);
    setShowPreview(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white shadow-lg rounded-lg p-8">
        <div className="space-y-6">
          {/* Informasi Karyawan */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Informasi Karyawan</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="employeeName" className="text-sm font-medium text-gray-700 mb-2 block">Nama Karyawan</Label>
                <Input
                  id="employeeName"
                  {...register("employeeName", { required: "Nama karyawan harus diisi" })}
                  placeholder="Masukkan nama karyawan"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                />
                {errors.employeeName && (
                  <p className="text-red-500 text-sm mt-1">{errors.employeeName.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="jobTitle" className="text-sm font-medium text-gray-700 mb-2 block">Jabatan</Label>
                <Input
                  id="jobTitle"
                  {...register("jobTitle", { required: "Jabatan harus diisi" })}
                  placeholder="Masukkan jabatan"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Periode Kontrak */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Periode Kontrak</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="startDate" className="text-sm font-medium text-gray-700 mb-2 block">Tanggal Mulai</Label>
                <Input
                  id="startDate"
                  type="date"
                  {...register("startDate", { required: "Tanggal mulai harus diisi" })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                />
                {errors.startDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="endDate" className="text-sm font-medium text-gray-700 mb-2 block">Tanggal Berakhir</Label>
                <Input
                  id="endDate"
                  type="date"
                  {...register("endDate", { required: "Tanggal berakhir harus diisi" })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                />
                {errors.endDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Kompensasi dan Jadwal */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Kompensasi dan Jadwal</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="salary" className="text-sm font-medium text-gray-700 mb-2 block">Gaji</Label>
                <Input
                  id="salary"
                  {...register("salary", { required: "Gaji harus diisi" })}
                  placeholder="Masukkan gaji (dalam Rupiah)"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                />
                {errors.salary && (
                  <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="workHours" className="text-sm font-medium text-gray-700 mb-2 block">Jam Kerja</Label>
                <Input
                  id="workHours"
                  {...register("workHours", { required: "Jam kerja harus diisi" })}
                  placeholder="Contoh: Senin-Jumat, 09:00-17:00"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
                />
                {errors.workHours && (
                  <p className="text-red-500 text-sm mt-1">{errors.workHours.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Deskripsi dan Ketentuan */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Deskripsi dan Ketentuan</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="jobDescription" className="text-sm font-medium text-gray-700 mb-2 block">Deskripsi Pekerjaan</Label>
                <Textarea
                  id="jobDescription"
                  {...register("jobDescription", { required: "Deskripsi pekerjaan harus diisi" })}
                  placeholder="Masukkan deskripsi dan tanggung jawab pekerjaan"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent h-32 resize-none"
                />
                {errors.jobDescription && (
                  <p className="text-red-500 text-sm mt-1">{errors.jobDescription.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="additionalTerms" className="text-sm font-medium text-gray-700 mb-2 block">Ketentuan Tambahan</Label>
                <Textarea
                  id="additionalTerms"
                  {...register("additionalTerms")}
                  placeholder="Masukkan ketentuan tambahan (opsional)"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent h-32 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6 border-t">
          <Button 
            type="submit"
            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md font-medium"
          >
            Pratinjau Kontrak
          </Button>
        </div>
      </form>

      <AlertDialog open={showPreview} onOpenChange={setShowPreview}>
        <AlertDialogContent className="max-w-3xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Pratinjau Kontrak Kerja</AlertDialogTitle>
            <AlertDialogDescription>
              {formData && (
                <Card className="p-8 mt-4 bg-white shadow-sm">
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Nama Karyawan</h3>
                        <p className="text-gray-900">{formData.employeeName}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Jabatan</h3>
                        <p className="text-gray-900">{formData.jobTitle}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Tanggal Mulai</h3>
                        <p className="text-gray-900">{formData.startDate}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Tanggal Berakhir</h3>
                        <p className="text-gray-900">{formData.endDate}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Gaji</h3>
                        <p className="text-gray-900">Rp {formData.salary}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Jam Kerja</h3>
                        <p className="text-gray-900">{formData.workHours}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">Deskripsi Pekerjaan</h3>
                      <p className="text-gray-900 whitespace-pre-line">{formData.jobDescription}</p>
                    </div>
                    {formData.additionalTerms && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-2">Ketentuan Tambahan</h3>
                        <p className="text-gray-900 whitespace-pre-line">{formData.additionalTerms}</p>
                      </div>
                    )}
                  </div>
                </Card>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-4">
            <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 text-gray-900">
              Kembali Edit
            </AlertDialogCancel>
            <AlertDialogAction 
              className="bg-black hover:bg-gray-800 text-white px-6"
              onClick={() => {
                // Here you would typically save the contract data
                console.log('Contract data:', formData);
                setShowPreview(false);
              }}
            >
              Simpan Kontrak
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
