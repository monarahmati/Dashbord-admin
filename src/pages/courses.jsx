import React, { Suspense } from "react";
import { httpInterceptedService } from "../core/http-service";
import CoursesList from "../components/Courses/CoursesList";
import { Await, defer, useLoaderData } from "react-router-dom";

const courses = () => {
    const data = useLoaderData();



  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <a className="btn btn-primary fw-bolder mt-n1">افزودن دوره جدید</a>
        </div>
        <Suspense fallback={<p className="text-info">...در حال دریافت اطلاعات </p>} >
          <Await resolve={data.courses}>
            {(loadeCourses) => <CoursesList courses={loadeCourses} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export async function coursesLoader() {
  return defer({
    courses: loadeCourses(),
  });
}

const loadeCourses = async () => {
  const response = await httpInterceptedService.get("/Course/list");
  return response.data;
};

export default courses;
