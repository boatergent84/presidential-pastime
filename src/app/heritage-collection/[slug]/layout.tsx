import ExhibitShare from "../../components/exhibit-share";

export default function HeritageExhibitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="bg-[#eee7d7] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <ExhibitShare />
        </div>
      </div>
    </>
  );
}
