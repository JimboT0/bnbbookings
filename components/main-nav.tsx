import Link from "next/link"
import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import { SanityProduct } from "@/config/inventory"
import { product } from "@/sanity/schemas/product-schema"

export function MainNav() {


  return (
    <div className="pl-10 items-center">
      <Link href="/" className="flex md:font-bold">
        <p>
          Rockefeller Plaza
        </p>
      </Link>
    </div>
  )
}
