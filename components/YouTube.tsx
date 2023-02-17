export default function Youtube({ id }: { id: string }): JSX.Element {
  return (
    <div className="aspect-video w-full">
      <iframe
        allow="autoplay; encrypted-media"
        className="w-full h-full"
        referrerPolicy="no-referrer"
        src={`https://www.youtube.com/embed/${id}`}
        title="Embedded YouTube video"
      />
    </div>
  )
}
