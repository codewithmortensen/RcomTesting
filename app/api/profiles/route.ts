import { profileSchema } from '@/app/types/schema';
import { sql } from '@/app/utils/query';
import { NextRequest, NextResponse } from 'next/server';

function generateProfileId() {
  return Math.floor(100000 + Math.random() * 900000);
}

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  //   if (body.birthDate) {
  //     body.birthDate = new Date(body.birthDate);
  //   }

  const validation = profileSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );
  }

  try {
    await sql`INSERT INTO ProfileTable
	(profile_id, first_name, last_name, birth_date, gender, phone_number, email)
	VALUES(
	  ${generateProfileId()},
	  ${validation.data.firstName},
	  ${validation.data.lastName},
	  ${validation.data.birthDate},
	  ${validation.data.gender},
	  ${validation.data.phone},
	  ${validation.data.email}
	)`;
    return NextResponse.json({ message: 'Profile created' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Failed to create profile' },
      { status: 500 }
    );
  }
};
