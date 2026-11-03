// Presidential Signature Collection photo registry.
// approved=true ONLY after checking the actual photograph,
// authentication evidence, and publication permission.
// Upload approved images to public/heritage/presidential-signatures/

export type SignaturePhoto = {
  src: string;
  approved: boolean;
  authentication: string;
  photoCredit: string;
};

export const signaturePhotos: Record<number, SignaturePhoto> = {
  26: {
    src: "/heritage/presidential-signatures/theodore-roosevelt.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA; Frank Navin / Collins family provenance",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  27: {
    src: "/heritage/presidential-signatures/william-howard-taft.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "JSA; Fred Clarke family provenance",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  28: {
    src: "/heritage/presidential-signatures/woodrow-wilson.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA; Tom Connolly collection",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  29: {
    src: "/heritage/presidential-signatures/warren-harding.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "JSA; April 13, 1921 Opening Day",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  30: {
    src: "/heritage/presidential-signatures/calvin-coolidge.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA; April 13, 1921",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  31: {
    src: "/heritage/presidential-signatures/herbert-hoover.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA; ex-Geddy Lee collection",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  32: {
    src: "/heritage/presidential-signatures/franklin-roosevelt.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA; inscribed to Clark Griffith, 1937",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  33: {
    src: "/heritage/presidential-signatures/harry-truman.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA, JSA and John Reznikoff",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  34: {
    src: "/heritage/presidential-signatures/dwight-eisenhower.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  35: {
    src: "/heritage/presidential-signatures/john-kennedy.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA; Whitey Ford provenance",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  36: {
    src: "/heritage/presidential-signatures/lyndon-johnson.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA; Steve Ridzik provenance",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  37: {
    src: "/heritage/presidential-signatures/richard-nixon.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "JSA",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  38: {
    src: "/heritage/presidential-signatures/gerald-ford.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  39: {
    src: "/heritage/presidential-signatures/jimmy-carter.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  40: {
    src: "/heritage/presidential-signatures/ronald-reagan.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA; autograph graded 8",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  41: {
    src: "/heritage/presidential-signatures/george-h-w-bush.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  42: {
    src: "/heritage/presidential-signatures/bill-clinton.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  43: {
    src: "/heritage/presidential-signatures/george-w-bush.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  44: {
    src: "/heritage/presidential-signatures/barack-obama.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA; autograph graded 9",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  45: {
    src: "/heritage/presidential-signatures/donald-trump.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA and JSA",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
  46: {
    src: "/heritage/presidential-signatures/joe-biden.png",
    approved: process.env.NODE_ENV === 'development',
    authentication: "PSA/DNA COA",
    photoCredit: "Hunt Auctions — Commander in Chief Master Set, Lot 180",
  },
};
