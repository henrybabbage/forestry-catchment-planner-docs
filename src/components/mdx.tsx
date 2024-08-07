import clsx from 'clsx'
import Image from 'next-export-optimize-images/image'
import { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/Heading'
import { Prose } from '@/components/Prose'
import { Children } from 'react'
import { PenIcon } from './icons/PenIcon'

export const a = Link
export { Button } from '@/components/Button'
export { Code as code, CodeGroup, Pre as pre } from '@/components/Code'

export function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex h-full flex-col pb-10 pt-16">
      <Prose className="flex-auto">{children}</Prose>
      <footer className="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
        {/* <Feedback /> */}
      </footer>
    </article>
  )
}

export const img = (props: ImageProps) => (
  <Image
    sizes="100vw"
    className="h-auto w-full"
    {...props}
    alt={props.alt || ''}
  />
)

export const h2 = function H2(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, 'level'>,
) {
  return <Heading level={2} {...props} />
}

function InfoIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="8" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 7.75h1.5v3.5"
      />
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  )
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-brand-500/20 bg-brand-50/50 p-4 leading-6 text-brand-900 dark:border-brand-500/30 dark:bg-brand-500/5 dark:text-brand-200 dark:[--tw-prose-links-hover:theme(colors.brand.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-brand-500 stroke-white dark:fill-brand-200/20 dark:stroke-brand-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Author({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex max-w-sm gap-2.5 rounded-2xl border border-brand-500/20 bg-brand-50/50 p-4 leading-6 text-brand-900 dark:border-brand-500/30 dark:bg-brand-500/5 dark:text-brand-200 dark:[--tw-prose-links-hover:theme(colors.brand.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <PenIcon className="mt-1 h-4 w-4 flex-none fill-brand-500 stroke-white dark:fill-brand-200/20 dark:stroke-brand-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Center({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full max-w-5xl flex-nowrap items-center justify-center">
      {children}
    </div>
  )
}

export function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 md:max-w-none md:grid-cols-2">
      {children}
    </div>
  )
}

export function ColumnLeft({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full col-start-1 col-end-2 md:col-end-2 flex flex-col items-center justify-center gap-y-8">{children}</div>
  )
}

export function ColumnRight({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full col-start-1 col-end-2 md:col-start-2 md:col-end-3 flex flex-col items-center justify-center gap-y-8">{children}</div>
  )
}

export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({
  children,
  sticky = false,
}: {
  children: React.ReactNode
  sticky?: boolean
}) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24',
      )}
    >
      {children}
    </div>
  )
}

export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-xs w-48 h-auto">{children}</div>
    )
}

export function List({ children }: { children: React.ReactNode }) {
  return (
    <ul
      role="list"
      className="m-0 max-w-full list-none rounded-lg p-0 dark:ring-1 dark:ring-white/10"
    >
      {Children.map(children, (child, childIndex) => (
        <li
          className={clsx(
            'm-0 flex break-before-auto items-center p-0 text-sm text-zinc-600 transition ui-not-focus-visible:outline-none dark:border-zinc-800 dark:text-zinc-400',
            childIndex % 2 === 0
              ? 'bg-zinc-100 dark:bg-transparent'
              : 'bg-transparent dark:bg-white/2.5',
          )}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="m-0 h-fit w-auto hyphens-auto break-words px-2 py-0">
      {children}
    </span>
  )
}

export function Properties({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6">
      <ul
        role="list"
        className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
      >
        {children}
      </ul>
    </div>
  )
}

export function Property({
  name,
  children,
  type,
  link,
}: {
  name: string
  children: React.ReactNode
  type?: string
  link?: string
}) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          {link ? (
            <a href={link} target="_blank" rel="noopener">
              <code>{name}</code>
            </a>
          ) : (
            <code>{name}</code>
          )}
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              {type}
            </dd>
          </>
        )}
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}
